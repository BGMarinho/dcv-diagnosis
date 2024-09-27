const feedbackMessage = (numReturned) => {
  console.log("caiu na função");
  const feedback = document.getElementById("feedback-message");
  if (numReturned === 0) {
    console.log("caiu no if");
    feedback.style.display = "block";
    feedback.innerText = "Não possui doença cardíaca";
    setTimeout(() => {
      feedback.style.display = "none";
    }, 2000);
    return;
  }
  feedback.style.display = "block";
  feedback.innerText = "Possui doença cardíaca";
  setTimeout(() => {
    feedback.style.display = "none";
  }, 2000);
};

const handleClick = () => {
  feedbackMessage(0);
};

// const postFormData = async () => {
//   const form = document.getElementsByTagName("form");
//   const formData = new FormData(form);
//   const url = "";
//   fetch(url, { method: "POST", body: formData })
//     .then((res) => {
//       if (res.status >= 400) {
//         return response.text().then((error) => {
//           const errorJson = JSON.parse(error);
//           throw new Error(errorJson.error);
//         });
//       }
//     })
//     .catch((error) => {
//       presentError(error);
//     });
// };
