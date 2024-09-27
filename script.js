const handleClick = () => {
  postFormData();
};

// tratar o feedback
const postFormData = async () => {
  const form = document.getElementsByTagName("form");
  const formData = new FormData(form);
  const url = "";
  fetch(url, { method: "POST", body: formData })
    .then((res) => {
      if (res.status >= 400) {
        return response.text().then((error) => {
          const errorJson = JSON.parse(error);
          throw new Error(errorJson.error);
        });
      }
    })
    .catch((error) => {
      presentError(error);
    });
};
