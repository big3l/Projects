function obtain_data() {
  fetch("/api")
    .then(res => {
      return res.json();
    })
    .then(data => {
      //console.log(data);
      create_table(data);
      //return data;
    });
}

function create_table(data) {
  let thead_content = "";
  for (let props in data[0]) {
    thead_content += `<th>${props}</th>`;
  }

  let tbody_content = "";
//   data.forEach ((data) => {
//     tbody_content += `<td>${data}</td>`;
//   })


  data.forEach(function(list) {
    tbody_content += `<tr>
                        <td>${list.ID}</td>
                        <td>${list.name}</td>
                        <td>${list.username}</td>
                        <td>${list.email}</td>
                        <td>${list.occupation}</td>
                        <td>${list.city}</td>                       
                      </tr>`;
  });

  document.getElementById("thead").innerHTML = "<tr>" + thead_content + "</tr>";
  document.getElementById("tbody").innerHTML = tbody_content 
}

obtain_data();
