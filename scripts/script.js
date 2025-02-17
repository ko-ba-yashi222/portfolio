


// About背景画像の切り替え
// document.addEventListener("DOMContentLoaded", function() {
//     const slider = document.querySelector('.image-slider');
//     let counter = 0;
    
//     // 画像のパス（2枚の画像）
//     const images = ['images/aboutBg.jpg', 'images/aboutBg2.jpg'];

//     // 背景画像の切り替え処理
//     function changeBackground() {
//         // 画像のカウンターを進める
//         counter = (counter + 1) % images.length;

//         // 背景画像を順番に切り替え
//         slider.style.backgroundImage = `url(${images[counter]}), url(${images[(counter + 1) % images.length]})`;
//     }

//     // 9秒ごとに画像を切り替え
//     setInterval(changeBackground, 9000);  // 6秒ごとに画像を切り替え
// });

// ↓　こちらはChatGPTを用いて作成しております。
//    1文字、1行ごとにテキストのタイピングが行われていく機能

document.addEventListener('DOMContentLoaded', function () {
    // 各テキスト要素
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');

    // タイピングアニメーションを行う関数
    function typeText(element, callback) {
        const text = element.textContent;  // textContentを使ってテキストを取得
        element.textContent = ''; // 初期状態では空にする
        element.style.opacity = 1; // テキストが表示される

        let index = 0;
        const interval = setInterval(function () {
            element.textContent += text[index];  // 1文字ずつ表示
            index++;

            if (index === text.length) {
                clearInterval(interval); // アニメーションが終了したら停止
                if (callback) callback();  // コールバック関数を呼び出す
            }
        }, 100); // 100msごとに1文字表示
    }

    // 最初に1行目のアニメーションを実行
    typeText(text1, function () {
        // 1行目のアニメーションが終わったら、次の行を表示
        setTimeout(() => typeText(text2, function () {
            // 2行目のアニメーションが終わったら、3行目を表示
            setTimeout(() => typeText(text3), 1000);
        }), 1000);  // 2行目の表示前に1秒の待機時間
    });
});





// スクロールボタン
// スクロールしたらボタンを表示/非表示
window.onscroll = function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block'; // スクロールしたら表示
    } else {
        scrollToTopBtn.style.display = 'none'; // それ以外のとき非表示
    }
};

// ボタンをクリックするとスムーズにトップに戻る
document.getElementById('scrollToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // スムーズにスクロール
    });
});






//下から上にスクロール
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });


  $(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_left');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });



  document.addEventListener('DOMContentLoaded', function () {
    // モーダル関連
    const modal = document.getElementById("easyModal");
    const closeModal = document.querySelector('.closeBtn');
    const removeNav = document.querySelector('.fix');
    const closeModala = document.getElementById("works");

    // リンクをクリックしたときにモーダルを表示
    const openModalButtons = document.querySelectorAll('.viewMore');

    openModalButtons.forEach(button => {
        button.onclick = function (event) {
            event.preventDefault(); // デフォルトのリンク動作を無効化

            // ボタンに関連するデータを動的に取得
            const title = button.getAttribute('data-title');
            const language = button.getAttribute('data-language');
            const duration = button.getAttribute('data-duration');
            const features = button.getAttribute('data-features');
            const challenges = button.getAttribute('data-challenges');

            // モーダルの内容を動的に変更
            updateModalContent(title, language, duration, features, challenges);

            // モーダルを表示
            modal.classList.add("active");
            setTimeout(() => {
              modal.style.opacity = '1';  // opacityを1にしてフェードイン
              modal.style.visibility = 'visible';  // 視認可能に
          }, 10); 

            // モーダル表示時にナビゲーションの固定クラスを削除
            removeNav.classList.remove('fix');

            // モーダルの位置までスムーズにスクロール
            modal.scrollIntoView({ behavior: 'smooth', block: 'center' });
        };
    });

    // ×ボタンがクリックされたとき
    closeModal.onclick = function () {
        modal.classList.remove("active");
        removeNav.classList.add('fix'); // ナビゲーションの固定クラスを再追加
    };


    // モーダルの内容を更新する関数
    function updateModalContent(title, language, duration, features, challenges) {
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalLang").innerText = language;
        document.getElementById("modalDuration").innerText = duration;
        document.getElementById("modalFeatures").innerText = features;
        document.getElementById("modalChallenges").innerText = challenges;
    }
});

//ハンバーガーメニュー
const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});