function submitForm(event) {
    event.preventDefault();
    document.getElementById('feedbackForm').classList.add('hidden');
    document.getElementById('successMessage').classList.remove('hidden');
}