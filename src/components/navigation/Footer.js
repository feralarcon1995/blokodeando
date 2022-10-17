import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer aria-label="Site Footer" class="bg-gray-100 dark:bg-gray-900">
      <section
        class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
      >
        <div class="lg:flex lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl  font-extrabold text-purple-700  font-text sm:text-4xl lg:text-left text-center" >Blokodeando</h2>

            <p
              class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left"
            >
              Blog sin fines de lucro, hecho con amor para la comunidad IT.

            </p>
            <p
              class="mx-auto  max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left"
            >
              Puedes ayudarme invitándome un <a href='https://cafecito.app/feralarcon1995' target='_blank' rel='noreferrer' className='text-purple-700 font-text hover:text-purple-500'> cafecito ☕</a>

            </p>
          </div>

          <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
            <ul
              class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
            >
              <li>
                <Link
                  class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/about"
                >
                  Sobre Mi
                </Link>
              </li>

              <li>
                <Link
                  class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                  to="/contact"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr class="my-6 border-purple-200 sm:mx-auto dark:border-purple-700 lg:my-8" />
        <p
          class="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right"
        >
          Copyright &copy; 2022 <a href='https://www.linkedin.com/in/feralarcon1995/' target='_blank' rel='noreferrer' className='text-purple-700 font-text hover:text-purple-500'>Fernando Alarcon</a>. Todos los derechos reservados.
        </p>
      </section>
    </footer>

  )
}

export default Footer