<?php $__env->startSection('toolbar'); ?>

    <md-toolbar md-scroll-shrink ng-if="true" ng-controller="toolbar">
        <div class="md-toolbar-tools">
            <h3 flex>
                <img style="width: 150px; cursor: pointer;" src="/images/logo_zasshi.png" alt="Zasshi" ondrag="return false" ng-click="toIndex()">
            </h3>
            <md-button class="md-icon-button" ng-click="logout()">
                <md-tooltip>Cerrar sesión</md-tooltip>
                <md-icon>exit_to_app</md-icon>
            </md-button>
        </div>
    </md-toolbar>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('body'); ?>
    <md-content flex=100 layout=row>
        <md-sidenav
            class="md-sidenav-left"
            md-component-id="left"
            md-is-locked-open="$mdMedia('gt-md')"
            md-whiteframe="4">

            <md-content flex ng-controller="sidebar">
                <div layout="column" layout-padding style="max-height: 64px;">
                  <md-input-container class="md-accent">
                      <md-icon>search</md-icon>
                      <input type="text" placeholder="Busqueda" ng-model="moduleFilter" flex="100" md-autofocus >
                  </md-input-container>
                </div>

                <md-expansion-panel md-component-id="{{section._id}}" ng-repeat="section in sections" style="margin: 0px;">
                <md-expansion-panel-collapsed>
                     <div class="md-title accent">{{section.name}}</div>
                     <md-expansion-panel-icon ng-click="$panel.collapse()" ></md-expansion-panel-icon>
                </md-expansion-panel-collapsed>

                <md-expansion-panel-expanded>
                  <md-expansion-panel-header ng-click="$panel.collapse()" >
                      <div class="md-title accent">{{section.name}}</div>
                      <md-expansion-panel-icon> </md-expansion-panel-icon>
                  </md-expansion-panel-header>
                  <md-expansion-panel-content flex="100" layout-fill style="padding: 0px!important;">
                      <md-list ng-cloak flex layout-fill style="padding: 0px!important;">
                          <md-list-item ng-repeat="module in section.modules | filter: moduleFilter" style="padding:0px">
                              <p flex="100" style="padding: 15px;" class="md-subhead module" ng-class="{'current_module': id_module == module._id}" ng-click="id_module != module._id && goTo(module, section)">
                                  <md-icon>{{module.icon}}</md-icon>
                                  <span>{{module.name}}</span>
                              </p>
                          </md-list-item>
                      </md-list>
                  </md-expansion-panel-content>
                  <!-- <md-expansion-panel-footer>
                       <div flex></div>
                       <md-button class="md-warn" ng-click="$panel.collapse()">Collapse</md-button>
                  </md-expansion-panel-footer>-->
                </md-expansion-panel-expanded>
                </md-expansion-panel>
            </md-content>

        </md-sidenav>
        <md-content flex layout-padding layout="column">
            <div ng-view layout="column" flex></div>
        </md-content>
    </md-content>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>