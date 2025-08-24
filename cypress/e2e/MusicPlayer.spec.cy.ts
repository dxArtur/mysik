describe('Music Player E2E Tests', () => {

    beforeEach(() => {
        // Visita a página inicial antes de cada teste
        cy.visit('http://localhost:3000/');
        //o teste pausa aqui para que você selecione uma música e inicie de play, para que de prossseguimeto aos testes
        //é necessário fazer isso antes de cada teste, para montar os componentes necessários para realizar os testes.
        cy.pause();
    });

    it('1. should add a track to the liked list when the heart button is clicked', () => {
        
    });

    it('2. should play and pause the audio correctly', () => {
        cy.get('[data-cy="player-play-button"]').click();
        cy.wait(100); 
        cy.get('[data-cy="player-play-button"]').find('svg').should('have.class', 'lucide-play');
        cy.get('[data-cy="player-play-button"]').click();
        cy.wait(100); 
        cy.get('[data-cy="player-play-button"]').find('svg').should('have.class', 'lucide-pause');
    });

    it('3. should show playback time increasing after playing', () => {
        cy.get('[data-cy="player-play-button"]').click();
        cy.get('[data-cy="player-current-time"]').should('not.contain', '00:00');
        
        // Adicionando um pequeno "wait" para garantir que o tempo tenha chance de mudar
        cy.wait(1000); 

        // Verificando se o tempo mudou de 00:00 (se tiver começado em 00:00)
        cy.get('[data-cy="player-current-time"]').should('not.contain', '00:00');
    });

    it('4. should adjust volume when volume bar is clicked', () => {
        cy.get('[data-cy="player-volume-bar"]').then($el => {
            const rect = $el[0].getBoundingClientRect();
            cy.get('[data-cy="player-volume-bar"]').click(rect.width * 0.5, 0); // Clica no meio
        });
    });
});