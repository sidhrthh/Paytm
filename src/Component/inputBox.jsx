export default function InputBox({ label, placeholder, onchange }) {
  return (
    <>
      <div>
        <label
          class="block mb-2 text-xl font-medium text-[#002d8b]"
        >
          {label}
        </label>
        <input
          placeholder={placeholder}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
      </div>
    </>
  );
}
