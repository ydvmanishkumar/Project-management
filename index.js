const form = document.getElementById("Form");
const input = document.getElementById("Input");
const taskList = document.getElementById("Task_list");

console.log(form, input, taskList);

form.onsubmit = (e) => {
  e.preventDefault();
  addTask();
};

function addTask(task) {
    const taskValue = task ? task.text : input.value;
  
   if (!taskValue) {
      return;
    }
  
    displayTask(taskValue);
  
    function displayTask(taskValue) {
      const newTask = document.createElement("li");
      newTask.innerHTML = taskValue;
  
      newTask.onclick = () => {
        newTask.classList.toggle("completed");
  
        if (newTask.classList.contains("completed")) {
          newTask.innerHTML = `<span>${taskValue} &#10004;</span><span onclick="deleteTask()">&#10060;</span>`;
          newTask.classList.toggle("delete_task");
        } else {
          newTask.innerHTML = `${taskValue}`;
          newTask.classList.toggle("delete_task");
        }
      };
  
      taskList.appendChild(newTask);
      input.value = "";
    }
  }
  


function deleteTask() {
  console.log(document.querySelectorAll("li"));

  document.querySelectorAll("li").forEach((element) => {
    element.classList.contains("delete_task") ? element.remove() : element;
  });
}