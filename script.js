document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value; // Ambil tanggal
    const shift = document.getElementById('shift').value;
    const status = document.getElementById('status').value; // Ambil status kehadiran
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const photoInput = document.getElementById('photo');
    const photoFile = photoInput.files[0];

    // Menentukan nilai jam masuk, jam pulang, dan foto berdasarkan status
    let finalCheckIn = checkIn;
    let finalCheckOut = checkOut;
    let finalPhotoUrl = '';

    if (status === 'hadir') {
        // Hanya ambil data jam masuk, jam pulang, dan foto jika status hadir
        const reader = new FileReader();
        reader.onload = function(e) {
            finalPhotoUrl = e.target.result;

            // Menambahkan data ke tabel
            addRowToTable(name, date, shift, status, finalCheckIn, finalCheckOut, finalPhotoUrl);
        };
        reader.readAsDataURL(photoFile);
    } else {
        //