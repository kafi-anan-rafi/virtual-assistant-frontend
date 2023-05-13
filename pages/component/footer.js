export default function Footer() {
  return (
    <>
      <div>
        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 bg-pink-600 dark:border-gray-600">
          <span class="text-sm text-gray-100 sm:text-center dark:text-gray-100">© 2023 Virtual Assistant. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-100 sm:mt-0">
            <li>
              <a href="/about" class="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}
