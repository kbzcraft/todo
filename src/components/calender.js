import "/src/styles/calenderOutput.css";

const calender = () => {
  return `
    <div class="calender bg-white max-w-80 max-h-80 py-5 px-[10px] rounded-xl">
      <div class="flex justify-between">
        <button class="decrement">
          <svg
            class="rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M16 12L10 18V6L16 12Z"></path>
          </svg>
        </button>
        <div
          class="currentMonth text-center hover:font-bold first-letter:font-bold font-medium text-[18px]"
        ></div>
        <button class="increment">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path d="M16 12L10 18V6L16 12Z"></path>
          </svg>
        </button>
      </div>

      <table class="flex w-full h-full flex-col items-center gap-1">
        <tr class="flex gap-2 font-normal">
          <th>sun</th>
          <th>mon</th>
          <th>tue</th>
          <th>wed</th>
          <th>thu</th>
          <th>fri</th>
          <th>sat</th>
        </tr>
      </table>
    </div>
    `;
};

export default calender;
