document.getElementById('imageUpload').addEventListener('change', function (event) {
    const uploadedImageContainer = document.getElementById('uploadedImageContainer');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            uploadedImageContainer.innerHTML = ''; // Eski görüntüleri temizler
            uploadedImageContainer.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
