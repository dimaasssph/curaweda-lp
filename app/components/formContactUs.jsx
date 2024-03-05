export const FormContactUs = () => {
    return (
        <form className="p-5">
            <div className="mb-3">
                <p className="text-xl text-gray-700 font-md">Have Questions? We'd love to help!</p>
            </div>
            <div class="mb-3">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-600 ">First Name</label>
                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            </div>
            <div class="mb-3">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-600 ">Last Name</label>
                <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
            </div>
            <div class="mb-3">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-600 ">Email</label>
                <input type="email" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
            </div>
            <div class="mb-3">
                <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-600 ">Message</label>
                <textarea name="" id="" cols="30" rows="5" className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">

                </textarea>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Let's Talk
            </button>
        </form>
    )
}