const formComentario = document.getElementById('formComentario');

formComentario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeUsuario = document.getElementById('inputNome').value;
    const comentario = document.getElementById('inputComentario').value;

    if (nomeUsuario.trim() !== '' && comentario.trim() !== '') {
        const tabelaFeedbacks = 'feedbacks';
        const chaveSupabase = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjbHZkampvcXl1Z2RwaWNxbnd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4MDgyNDIsImV4cCI6MjAxNTM4NDI0Mn0.S7JWGkC8-2bsOZg29HUbZ_rDcy9iht7jIzcViEOWGtg';

        fetch(`https://fclvdjjoqyugdpicqnwx.supabase.co/rest/v1/${tabelaFeedbacks}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': chaveSupabase,
            },
            body: JSON.stringify({ nome: nomeUsuario, comentario: comentario }),
        })
            //.then(response => response.json())
            .then(data => {
                console.log('Sucesso:', data);
                window.location.href = "";
            })
            .catch(error => console.error('Erro:', error));
    }
});
