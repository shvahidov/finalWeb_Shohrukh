# finalWeb_Shohrukh
мой лендинг для типографической компании
<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>

<body>
  <!-- Navbar -->
  <nav class="relative container mx-auto p-6 ">
    <!-- Header container-->
    <header class="flex items-center justify-between">
      <!-- logo -->
      <div class="pt-2">
        <img src="img/logo.png" alt="" width="100px">
      </div>
      <!-- Menu items -->
      <div class="hidden space-x-6 md:flex ">
        <a href="#" class="hover:text-darkGrayishBlue">Главная</a>
        <a href="#" class="hover:text-darkGrayishBlue">О нас</a>
        <a href="#" class="hover:text-darkGrayishBlue">Продукты</a>
        <a href="#" class="hover:text-darkGrayishBlue">Контакты</a>
      </div>
      <!-- Button -->
      <a href=""
        class="hidden md:block p-3 pt-2 text-white bg-purple-500 rounded-full baseline hover:scale-x-110 scale-y-110 transition-transform">
        Зарегистрироваться
      </a>

      <!-- Hamburger icon -->
      <button id="menu-btn" class="block hamburger md:hidden focus:outline-none ">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>

    </header>

    <!-- Mobile menu -->
    <div class="md:hidden ">
      <div id="menu" class="absolute flex-col items-center hidden left-6 right-6 self-end py-8 mt-10 space-y-6 
      sm:w-auto font-bold bg-white sm:self-center drop-shadow-md ">
        <a href="#">Главная</a>
        <a href="#">О нас</a>
        <a href="#">Продукты</a>
        <a href="#">Контакты</a>
      </div>
    </div>
  </nav>
  <section id="content">
    <!-- Flex container -->
    <div class="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row ">
      <!-- Left item -->
      <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 class="text-center text-2xl font-bold text-black sm:text-3xl lg:text-left lg:text-7xl">Mercury - напечатаем всё что угодно </h1>
        <p class="text-center text-gray-400 lg:text-left lg:text-xl md:">Настало время окунуться в мир где все покрыто красками и словами который
          передает твои мысли</p>
        <!-- Get started -->
        <div class="flex justify-center md:justify-start ">
          <a href="#"
            class="p-3 px-6 pt-2 text-white bg-purple-500 rounded-full self-baseline hover:hover:scale-x-110 scale-y-110 transition-transform">
            Начать
          </a>
        </div>
      </div>

      <div class="md:w-1/2">
        <img src="/src/img/kat4.jpg">
      </div>

    </div>
  </section>

  <section id="blocks">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold lg:text-5xl">Mercury - типографическая компания</h2>

          <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Типографией называют определенную
            отрасль, которая занимается печатным делом. И наша компания одно из таких отраслей.</p>
        </div>
        <!-- text - end -->

        <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          <!-- feature - start -->
          <div class="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 class="mb-2 text-lg font-semibold md:text-xl">Печать</h3>
            <p class="mb-2 text-gray-500">Мы производим цветные и чёрно-белые печати каких только вы пожелаете. Ведь
              сегодняшнее время мир полон красок и ярких идей</p>
          </div>
          <!-- feature - end -->

          <!-- feature - start -->
          <div class="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 class="mb-2 text-lg font-semibold md:text-xl">Книги</h3>
            <p class="mb-2 text-gray-500">Куда же без книг. Наша производство производит любые книги от литературных
              книг или же для простого чтения которое подходит и взрослым и детям</p>
          </div>
          <!-- feature - end -->

          <!-- feature - start -->
          <div class="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 class="mb-2 text-lg font-semibold md:text-xl">Буклеты</h3>
            <p class="mb-2 text-gray-500">Буклеты ещё одна вещ которая также мы производим. Вы можете заказать у нас
              буклеты на любые случаи жизни</p>
          </div>
          <!-- feature - end -->

          <!-- feature - start -->
          <div class="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 class="mb-2 text-lg font-semibold md:text-xl">Визитки</h3>
            <p class="mb-2 text-gray-500">Также мы производим визитки для компаний, ресторанов или же для людей. Если
              будут нужны визитки вы по моему уже знаете к кому обращаться</p>
          </div>
          <!-- feature - end -->

          <!-- feature - start -->
          <div class="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 class="mb-2 text-lg font-semibold md:text-xl">Реклама</h3>
            <p class="mb-2 text-gray-500">Хотите чтобы о вас узнали? - тогда дай о себе знать то есть сделай так чтобы
              все тебя узнали. Мы тебе поможем с этим ведь наша компания поможет красочно заявить о тебе </p>

          </div>
          <!-- feature - end -->

          <!-- feature - start -->
          <div class="flex flex-col rounded-lg border p-4 md:p-6">
            <h3 class="mb-2 text-lg font-semibold md:text-xl">Продуктивность</h3>
            <p class="mb-4 text-gray-500">Доверяя нам заказы мы будем делать их с высоким качеством и без опозданий в
              нужные сроки</p>
          </div>
          <!-- feature - end -->
        </div>
      </div>
    </div>
  </section>

  <section id="product">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-3xl">Продукты</h2>
        </div>
        <!-- text - end -->

        <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src="img/rek.jpg" loading="lazy" alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-black">
                <a href="#">Рекламная полиграфия</a>
              </h2>

              <p class="mb-8 text-gray-500">Бланки, блокноты, брошюры, буклеты, визитки, грамоты, дипломы, календари,
                конверты, листовки</p>
            </div>
          </div>
          <!-- article - end -->

          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src="img/shik.jpg" loading="lazy" alt="Photo by Lorenzo Herrera"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-black">
                <a href="#">Широкоформатная полиграфия</a>
              </h2>

              <p class="mb-8 text-gray-500">Печать плакатов и постеров Рекламные конструкции <br> Печать на litebox <br>
                Контурная резка наклеек <br> Накатка плакатов на основу</p>
            </div>
          </div>
          <!-- article - end -->

          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src="img/suv.jpeg" loading="lazy" alt="Photo by Magicle"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-black">
                <a href="#">Сувенирная полиграфия</a>
              </h2>

              <p class="mb-8 text-gray-500">
                Продукция по каталогу <br>
                Фирменные пакеты <br>
                Мультифункциональные ручки <br>
                Эко продукция <br>
                Мерч и промо-текстиль
              </p>
            </div>
          </div>
          <!-- article - end -->

          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
              <img src="img/res.png" loading="lazy" alt="Photo by Martin Sanchez"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-black">
                <a href="#">Полиграфия для ресторанов</a>
              </h2>

              <p class="mb-8 text-gray-500">Подставки под напитки <br> Печать меню <br> Карты лояльности <br> Тейблент
                <br> Чек бук
              </p>
            </div>
          </div>
          <!-- article - end -->
        </div>
      </div>
    </div>
  </section>

  <section id="cta">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="fon flex flex-col items-center rounded-lg bg- p-4 sm:p-8 lg:flex-row lg:justify-between">
          <div class="mb-4 sm:mb-8 lg:mb-0">
            <h2 class="text-center pb-3 text-xl font-bold text-black sm:text-3xl lg:text-left lg:text-4xl">Теперь это возможно</h2>
            <p class="text-center text-black lg:text-left lg:text-xl">Мы предоставляем вам шанс получить бесплатную пробную печать на любые товары до формата А4</p>
          </div>

          <div class="flex flex-col items-center lg:items-end">
            <button class="inline-block rounded bg-purple-500 px-12 py-3 text-center text-sm font-semibold text-white hover:scale-x-110 scale-y-110 transition-transform">Заказать</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="footer">
    <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="flex flex-col items-center border-t pt-6">
          <!-- nav - start -->
          <nav class="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <a href="#" class="text-gray-500 transition ">Контакты</a>
          </nav>
          <!-- nav - end -->

          <!-- social - start -->
          <div class="flex gap-4">
            <a href="#" target="_blank">
              <img src="img/instagram.png" height="25px" width="25px">
            </a>

            <a href="#" target="_blank">
              <img src="img/telegram.png" height="25px" width="25px">
            </a>

            <a href="#" target="_blank">
              <img src="img/whatsapp.png" height="25px" width="25px">
            </a>

            <a href="#" target="_blank">
              <img src="img/pochta.png" height="25px" width="25px">
            </a>
          </div>
          <!-- social - end -->
        </div>

        <div class="py-8 text-center text-sm text-gray-400">© 2023 - Coddy corporation</div>
      </footer>
    </div>
  </footer>

  <script src="script.js"></script>
</body>

</html>
