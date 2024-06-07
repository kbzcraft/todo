export default function calenderLogicfunc() {
  // selecting Elements
  const table = document.querySelector("table");
  const weekDays = document.querySelectorAll("th");
  const currentMonthDiv = document.querySelector(".currentMonth");
  const incrementBtn = document.querySelector(".increment");
  const decrementBtn = document.querySelector(".decrement");

  // initializing variable

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonthIndex = date.getMonth();
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentDate = date.getDate();
  const currentDayIndex = date.getDay();
  const currentDayOfTheWeek = date.toLocaleString("default", {
    weekday: "short",
  });

  let year = currentYear;
  let monthIndex = currentMonthIndex;

  let selectedDate = currentDate;

  displayDates();

  // events
  incrementBtn.addEventListener("click", () => {
    console.log("increament");
    if (monthIndex == 11) {
      monthIndex = 0;
      year++;
    } else {
      monthIndex++;
    }
    clearTabelData();
    displayDates();
  });

  decrementBtn.addEventListener("click", () => {
    if (monthIndex == 0) {
      monthIndex = 11;
      year--;
    } else {
      monthIndex--;
    }
    clearTabelData();
    displayDates();
  });

  //functions

  function displayDates() {
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    currentMonthDiv.textContent = firstDayOfMonth.toLocaleString("default", {
      month: "long",
    });
    const dateOfTheFirstDayOfMonth = firstDayOfMonth.getDate();
    const indexOfFirstDayOfMonth = firstDayOfMonth.getDay();

    const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
    const dateOfTheLastDayOfMonth = lastDayOfMonth.getDate();

    const previousMonthLastDay = new Date(year, monthIndex, 0);
    const dateOfThePreviousMonthLastDay = previousMonthLastDay.getDate();

    let tableRows = [];
    const selectedDateElements = [];
    let dateNum = dateOfTheFirstDayOfMonth;
    let isNextMonthDate = false;

    for (let week = 1; week <= 6; week++) {
      const tableRow = document.createElement("tr");
      tableRow.classList.add("flex", "gap-2");
      for (let day = 0; day < 7; day++) {
        const tableData = document.createElement("td");
        tableData.classList.add("text-center");

        if (week == 1) {
          if (day < indexOfFirstDayOfMonth) {
            tableData.classList.add("previousMonth");
            tableData.textContent =
              dateOfThePreviousMonthLastDay -
              (indexOfFirstDayOfMonth - day - 1);
          } else {
            tableData.textContent = dateNum;
            tableData.classList.add("currentMonth");
            dateNum++;
          }
        } else {
          if (dateNum > dateOfTheLastDayOfMonth) {
            dateNum = dateOfTheFirstDayOfMonth;
            isNextMonthDate = true;
          }
          if (isNextMonthDate) {
            tableData.classList.add("nextMonth");
          } else {
            tableData.classList.add("currentMonth");
          }
          tableData.textContent = dateNum;
          dateNum++;
        }
        tableRow.appendChild(tableData);
      }
      tableRows.push(tableRow);
    }
    tableRows.forEach((row) => {
      table.appendChild(row);
    });

    const tableHeads = document.querySelectorAll("th");
    const currentMonths = document.querySelectorAll(".currentMonth");
    if (currentYear == year && currentMonthIndex == monthIndex) {
      tableHeads[currentDayIndex].style.color = "red";
      currentMonths[currentDate].classList.add("currentDate");
    } else {
      tableHeads[currentDayIndex].style.color = "inherit";
      currentMonths[currentDate].classList.remove("curentDate");
    }
    //events
    const tableDataElements = document.querySelectorAll("td");
    tableDataElements.forEach((td) => {
      td.addEventListener("mouseover", () => {
        td.style.backgroundColor = "#99a3c4ea";
        td.style.borderRadius = "50%";
      });
      td.addEventListener("mouseout", () => {
        if (!td.classList.contains("currentDate")) {
          td.style.backgroundColor = "inherit";
          td.style.borderRadius = "0";
        } else {
          td.style.backgroundColor = "#0641ff";
        }
      });
      td.addEventListener("click", () => {
        if (td.classList.contains("currentMonth")) {
          const date = new Date(year, monthIndex, td.textContent);
          selectedDate = date.toDateString();
          console.log(`SelectedDate = ${selectedDate}`);
          const currentDateElement = document.querySelector(".currentDate");
          if (currentDateElement) {
            currentDateElement.style.backgroundColor = "inherit";
            currentDateElement.style.color = "inherit";
          }

          selectedDateElements.push(td);
          if (selectedDateElements.length == 1) {
            // let prev = selectedDateElements.shift();
            // console.log(prev);
            selectedDateElements[0].classList.add("selectedDate");
          } else {
            let prev = selectedDateElements.shift();
            prev.classList.remove("selectedDate");
            selectedDateElements[0].classList.add("selectedDate");
          }
        }

        if (td.classList.contains("nextMonth")) {
          // console.log(year, monthIndex + 1, td.textContent);
          if (monthIndex == 11) {
            monthIndex = 0;
            year++;
          } else {
            monthIndex++;
          }
          clearTabelData();
          displayDates();
        }
        if (td.classList.contains("previousMonth")) {
          if (monthIndex == 0) {
            monthIndex = 11;
            year--;
          } else {
            monthIndex--;
          }
          clearTabelData();
          displayDates();
        }
      });
    });
  }

  function clearTabelData() {
    const tableRows = document.querySelectorAll("table>tr");
    tableRows.forEach((tr) => table.removeChild(tr));
  }
}
