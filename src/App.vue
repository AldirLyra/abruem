<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="custom-toolbar">
                <ion-title class="header-title">ABRUEM 2024</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="custom-content">
            <!-- Importando a imagem diretamente do script -->
            <ion-img :src="slideImage"
                class="main-image"></ion-img>

            <ion-card class="info-card">
                <ion-card-content class="info-card-content">
                    <h2>Cidade: Palmas</h2>
                    <h2>Realização: ABRUEM</h2>
                </ion-card-content>
            </ion-card>

            <ion-grid>
                <ion-row>
                    <!-- Primeiro Card -->
                    <ion-col size="6"
                        size-md="3">
                        <ion-card :style="{ backgroundImage: `url(${icon4Image})` }"
                            class="redirect-card">
                            <div class="icon-container">
                                <ion-icon :src="chatSupportIcon"
                                    size="large"></ion-icon>
                            </div>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button yellow"
                                    @click="openLink('https://drive.google.com/file/d/1ilP5DDruvKaxGGZ7EHT6SCu9W4uezM-8/view?usp=sharing')">
                                    Apoio ao Participante
                                </ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>

                    <!-- Segundo Card -->
                    <ion-col size="6"
                        size-md="3">
                        <ion-card :style="{ backgroundImage: `url(${icon6Image})` }"
                            class="redirect-card">
                            <div class="icon-container">
                                <ion-icon :src="eventExtIcon"
                                    size="large"></ion-icon>
                            </div>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button green"
                                    @click="openLink('https://drive.google.com/file/d/18L5L4IkJYb77bfY_XVsyDZPsBQP6v9bH/view?usp=drive_link')">
                                    Programação do Evento
                                </ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>

                    <!-- Terceiro Card -->
                    <ion-col size="6"
                        size-md="3">
                        <ion-card :style="{ backgroundImage: `url(${icon5Image})` }"
                            class="redirect-card">
                            <div class="icon-container">
                                <ion-icon :src="photosIcon"
                                    size="large"></ion-icon>
                            </div>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button yellow-light"
                                    @click="openLink('https://drive.google.com/drive/folders/1TV_yaKCOAtAxyli_3MKXQmLSedO-uA_8?usp=sharing')">
                                    Galeria de Fotos
                                </ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>

                    <!-- Quarto Card -->
                    <ion-col size="6"
                        size-md="3">
                        <ion-card :style="{ backgroundImage: `url(${icon8Image})` }"
                            class="redirect-card">
                            <div class="icon-container">
                                <ion-icon :src="calculatorIcon"
                                    size="large"></ion-icon>
                            </div>
                            <ion-card-content>
                                <ion-button expand="block"
                                    class="custom-button blue"
                                    @click="openLink('https://forms.gle/ZczpskztomsGvY2T6')">
                                    Logística
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
                    </div>
                </ion-toolbar>
            </ion-footer>
        </ion-content>
    </ion-page>
</template>


<script>
import slideImage from '@/assets/assets-abruem/banner.png';
import icon4Image from '@/assets/assets-abruem/elements/icon4.jpeg';
import icon5Image from '@/assets/assets-abruem/elements/icon5.jpeg';
import icon6Image from '@/assets/assets-abruem/elements/icon6.jpeg';
import icon8Image from '@/assets/assets-abruem/elements/icon8.jpeg';
import chatSupportIcon from '@/assets/assets-abruem/icons/chat-support-svgrepo-com.svg';
import eventExtIcon from '@/assets/assets-abruem/icons/event-ext-svgrepo-com.svg';
import photosIcon from '@/assets/assets-abruem/icons/photos-svgrepo-com.svg';
import calculatorIcon from '@/assets/assets-abruem/icons/calculator-svgrepo-com.svg';

export default {
    data() {
        return {
            slideImage,
            icon4Image,
            icon5Image,
            icon6Image,
            icon8Image,
            chatSupportIcon,
            eventExtIcon,
            photosIcon,
            calculatorIcon,
        };
    },
    methods: {
        openLink(url) {
            window.open(url, '_blank');
        },
    },
};
</script>

<style scoped>
.custom-toolbar {
    --background: #324ca6;
}

.header-title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: white;
}

.custom-content {
    --background: #f29f05;
}

.main-image {
    width: 100%;
    height: auto;
    margin-bottom: 0;
    /* Colar o card ao banner */
}

.info-card {
    margin-top: -2px;
    border: 2px solid #f29f05;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    --background: #324ca6;
    color: white;
}

.info-card-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.info-card h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
}

.info-card p {
    font-size: 16px;
    margin: 5px 0;
}

.custom-divider {
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #324ca6;
}

/* Estilização dos cards de redirecionamento */
.redirect-card {
    position: relative;
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.5);
    /* Tornar o fundo opaco/transparente */
    border-radius: 10px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    /* Sombra mais forte */
    color: white;
    transition: transform 0.2s;
    padding: 20px;
}

.redirect-card:hover {
    transform: scale(1.05);
}

.icon-container {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    /* Fundo semitransparente para destacar o ícone */
    padding: 10px;
    border-radius: 50%;
}

.ion-icon {
    color: white;
    font-size: 32px;
}

ion-card-content {
    display: flex;
    justify-content: center;
    /* Centralizar o conteúdo horizontalmente */
    align-items: flex-end;
    /* Garantir que o botão fique alinhado ao final do card */
    padding-bottom: 20px;
    /* Adicionar um espaçamento no final do card */
    height: 100%;
    /* Certificar que o card preencha toda a altura disponível */
    position: relative;
}

ion-button {
    font-weight: bold;
    white-space: normal;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    /* Largura fixa para consistência */
    height: 44px;
    /* Definir uma altura consistente para todos os botões */
    margin: 0 auto;
    /* Centralizar o botão */
}

.custom-button.blue {
    --background: #324ca6;
    --color: white;
}

.custom-button.yellow {
    --background: #edd662;
    --color: white;
}

.custom-button.green {
    --background: #afbf30;
    --color: white;
}

.custom-button.yellow-light {
    --background: #f2cb05;
    --color: white;
}

.custom-button.brown {
    --background: #8d541d;
    --color: white;
}

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
</style>