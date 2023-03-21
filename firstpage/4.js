let fileCount = 1;

function addInput() {
  fileCount++;
  let fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.name = "file" + fileCount;
  fileInput.multiple = true;
  fileInput.className = "file-input";
  document.getElementById("file-input").parentNode.insertBefore(fileInput, document.getElementById("add-button"));
}

function uploadFiles() {
  let files = document.querySelectorAll(".file-input");
  let formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("file" + (i + 1), files[i].files[0]);
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "upload.php", true);
  xhr.onload = function() {
    if (this.status === 200) {
      alert("Files uploaded successfully");
    } else {
      alert("Error uploading files");
    }
  }
  xhr.send(formData);
}
