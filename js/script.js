// グローバル空間に変数や関数をセットしないために即時関数で閉じ込めている
(() => {
  // 入力したTodoタスクの一覧を保持
  const todos = [];

  // 要素を取得
  const inputTodoBox = document.getElementById("input-todo-box");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener('click', (event) => {
    const todo = inputTodoBox.value;
    // テキストボックスの中を空にする
    inputTodoBox.value = "";
    if (todo) {
      // Todoリスト一覧に追加
      todos.push(todo);
      showTodos();
    }
  });

  // todos の中身を一覧表示する
  const showTodos = () => {
    // 要素を全削除
    while(todoList.firstChild) {
      todoList.removeChild(todoList.firstChild);
    }

    // 要素を全表示
    todos.forEach((todo, index) => {
      const todoItem = document.createElement("li");
      const taskNumber = index + 1;

      todoItem.textContent = `${taskNumber} : ${todo}`
      todoList.appendChild(todoItem);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除";
      todoItem.appendChild(deleteButton);

      deleteButton.addEventListener("click", (event) => {
        deleteTodo(index);
      });
    });    
  }

  // 削除ボタンをクリックしたら実行される
  const deleteTodo = (index) => {
    todos.splice(index, 1);
    showTodos();
  }

})();