document.querySelectorAll('.vote-button').forEach(button => {
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const id = event.target.closest('form').action.split('/').slice(-2)[0];
        const response = await fetch(`/marvel/${id}/vote`, { method: 'POST' });
        if (response.ok) {
            location.reload();
        } else {
            alert('Hubo un problema al votar.');
        }
    });
});


//la lógica de votación para actualizar la lista de votos en tiempo real.