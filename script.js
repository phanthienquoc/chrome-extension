async function fetchData() {
  // const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
  // const record=await res.json();
  // document.getElementById("date").innerHTML=record.data[0].date;
  // document.getElementById("areaName").innerHTML=record.data[0].areaName;
  // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
  // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;

//   const rest = await fetch("http://localhost:3000/cronjobs", {
//     method: "POST",
//     body: JSON.stringify({
//       name: "test",
//       action: () => {
//         console.log("xxx");
//       },
//     }),
//   });
}

// document
//   .getElementById("submit-form")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log(document.querySelector("form"));
//     var formData = new FormData(document.querySelector("form"));
//     console.log(formData);

//     var object = {};
//     formData.forEach((value, key) => {
//       // Reflect.has in favor of: object.hasOwnProperty(key)
//       if (!Reflect.has(object, key)) {
//         object[key] = value;
//         return;
//       }
//       if (!Array.isArray(object[key])) {
//         object[key] = [object[key]];
//       }
//       object[key].push(value);
//     });
//     var json = JSON.stringify(object);
//   });

var myForm = document.getElementById("timelineform");
myForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formData = new FormData(myForm);
  let result = {};
  for (var entry of formData.entries()) {
    result[entry[0]] = entry[1];
  }
  //   result = JSON.stringify(result);

  const requestBody = JSON.stringify({
    ...result,
    action: () => {
      console.log("xxx");
    },
  });

  const rest = await fetch("http://localhost:3000/cronjobs", {
    method: "POST",
    body: requestBody,
    headers: {
        "Content-Type": "application/json"
    }
  });
  console.log(result,requestBody);
});
