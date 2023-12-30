let insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `<div class="color" >
  <table>
  <th>Key</th>
  <th>Key Code</th>
  <th>Code</th>

  <tr>
  <td>${e.key === " " ? "space" : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>

  </table>
  </div>`;
});
