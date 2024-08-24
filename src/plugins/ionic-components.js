import {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonRouterOutlet,
    IonSplitPane,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonPage,
    IonCard,
    IonCardContent,
    IonCol,
    IonRow,
    IonGrid
} from '@ionic/vue';

export default {
    install(app) {
        app.component('ion-app', IonApp);
        app.component('ion-content', IonContent);
        app.component('ion-icon', IonIcon);
        app.component('ion-item', IonItem);
        app.component('ion-label', IonLabel);
        app.component('ion-list', IonList);
        app.component('ion-list-header', IonListHeader);
        app.component('ion-menu', IonMenu);
        app.component('ion-menu-toggle', IonMenuToggle);
        app.component('ion-note', IonNote);
        app.component('ion-router-outlet', IonRouterOutlet);
        app.component('ion-split-pane', IonSplitPane);
        app.component('ion-header', IonHeader);
        app.component('ion-toolbar', IonToolbar);
        app.component('ion-title', IonTitle);
        app.component('ion-page', IonPage);
        app.component('ion-card', IonCard);
        app.component('ion-card-content', IonCardContent);
        app.component('ion-col', IonCol);
        app.component('ion-row', IonRow);
        app.component('ion-grid', IonGrid);
    }
};
