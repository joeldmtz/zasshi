<?php $__env->startSection('toolbar'); ?>
    <md-toolbar md-scroll-shrink ng-if="true">
        <div class="md-toolbar-tools">
            <h3>
                <img style="width: 150px" src="/images/logo_zasshi.png" alt="Zasshi">
            </h3>
        </div>
    </md-toolbar>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('body'); ?>
    <div layout-align="center center" flex layout="column" class="main-background" ng-controller="login">
        <md-card style="width: 500px;" class="md-primary" md-theme="dark">
            <md-content layout-padding>
                <div layout="column" layout-align="center center">
                    <img style="width: 80%" src="/images/logo_zasshi.png" alt="Zasshi">
                </div>
                <form name="formLogin">
                    <div layout="column" layout-align="center center">
                        <md-progress-linear md-mode="indeterminate" ng-show="showLoader"></md-progress-linear>
                        <p class="md-headline">Iniciar Sesión</p>
                    </div>
                    <md-divider></md-divider>
                    <md-input-container class="md-block">
                        <md-icon>person_outline</md-icon>
                        <input type="text" ng-model="user.email" placeholder="Usuario" required md-autofocus ng-keyup="$event.keyCode == 13 && login()">
                    </md-input-container>
                    <md-input-container class="md-block">
                        <md-icon>lock_outline</md-icon>
                        <input type="password" ng-model="user.password" placeholder="Contraseña" required ng-keyup="$event.keyCode == 13 && login()">
                    </md-input-container>
                    <div layout-align="end" layout="row">
                        <md-button ng-click="login()">Aceptar</md-button>
                    </div>
                </form>
            </md-content>
        </md-card>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>