<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="custom-toolbar">
                <ion-title class="header-title">ABRUEM 2024</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="custom-content">
            <ion-img src="../resources/assets-abruem/slide_01.png"
                class="main-image"></ion-img>

            <div class="custom-divider">Informações do Evento</div>

            <ion-grid>
                <ion-row>
                    <ion-col size="12"
                        size-md="6">
                        <ion-card class="custom-card">
                            <ion-img src="../resources/assets-abruem/elements/icon8.jpeg"
                                class="card-image"></ion-img>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button blue"
                                    @click="openLink('https://link-para-inscricao')">
                                    Inscrição
                                </ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="12"
                        size-md="6">
                        <ion-card class="custom-card">
                            <ion-img src="../resources/assets-abruem/elements/icon4.jpeg"
                                class="card-image"></ion-img>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button yellow"
                                    @click="openLink('https://link-para-guia')">
                                    Guia de Apoio ao Participante
                                </ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col size="12"
                        size-md="6">
                        <ion-card class="custom-card">
                            <ion-img src="../resources/assets-abruem/elements/icon6.jpeg"
                                class="card-image"></ion-img>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button green"
                                    @click="openLink('https://link-para-programacao')">
                                    Programação
                                </ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col size="12"
                        size-md="6">
                        <ion-card class="custom-card">
                            <ion-img src="../resources/assets-abruem/elements/icon5.jpeg"
                                class="card-image"></ion-img>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button yellow-light"
                                    @click="openLink('https://link-para-site')">
                                    Site do Evento
                                </ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>

            <ion-footer class="custom-footer">
                <ion-toolbar class="footer-toolbar">
                    <div class="footer-content">
                        <p>© 2024 ABRUEM - Todos os direitos reservados.</p>
                        <!-- <div class="footer-links">
                            <ion-button fill="clear"
                                class="footer-link"
                                @click="openLink('https://link-para-termos')">Termos de Uso</ion-button>
                            <ion-button fill="clear"
                                class="footer-link"
                                @click="openLink('https://link-para-privacidade')">Política de Privacidade</ion-button>
                        </div> -->
                    </div>
                </ion-toolbar>
            </ion-footer>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    methods: {
        openLink(url) {
            window.open(url, '_blank');
        }
    }
}
</script>

<style scoped>
.custom-toolbar {
    --background: #324ca6;
    /* Cor azul */
}

.header-title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: white;
}

.custom-content {
    --background: #f29f05;
    /* Cor laranja clara */
}

.main-image {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.custom-card {
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    transition: transform 0.2s;
    --background: #ffffff;
}

.custom-card:hover {
    transform: scale(1.05);
}

.card-image {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    display: block;
}

.custom-button {
    margin-top: 10px;
    font-weight: bold;
    --border-radius: 8px;
}

.custom-button.blue {
    --background: #324ca6;
    --color: white;
}

.custom-button.yellow {
    --background: #edd662;
    --color: black;
}

.custom-button.green {
    --background: #afbf30;
    --color: white;
}

.custom-button.yellow-light {
    --background: #f2cb05;
    --color: black;
}

.custom-divider {
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #324ca6;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.custom-divider:before,
.custom-divider:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30%;
    height: 2px;
    background-color: #324ca6;
}

.custom-divider:before {
    left: 5%;
}

.custom-divider:after {
    right: 5%;
}

@media (max-width: 600px) {

    .custom-divider:before,
    .custom-divider:after {
        width: 20%;
    }

    .custom-divider {
        font-size: 18px;
    }
}

/* Estilos do Footer */
.custom-footer {
    --background: #324ca6;
    margin-top: 20px;
    padding: 20px 0;
}

.footer-toolbar {
    --background: transparent;
}

.footer-content {
    text-align: center;
    color: white;
}

.footer-links {
    margin-top: 10px;
}

.footer-link {
    color: white;
    font-size: 14px;
    margin: 5px 10px;
    --background: rgba(255, 255, 255, 0.2);
    --color: white;
    --border-radius: 5px;
    padding: 5px 10px;
}

.footer-link:hover {
    --background: rgba(255, 255, 255, 0.3);
}
</style>