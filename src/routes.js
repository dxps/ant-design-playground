import React                  from "react";
import { Route, IndexRoute }  from "react-router";
import App                    from "./containers/App";
import HomePage               from "./containers/HomePage";
import ConnectedUsersPage     from "./containers/UsersPage";
import NotFoundPage           from "./components/NotFoundPage";

import TransferDemo                 from "./antd-demos/Transfer/TransferDemo";
import TreeSelectDemo               from "./antd-demos/TreeSelect/TreeSelectDemo";
import AdvancedSearchFormDemo       from './antd-demos/Form/AdvancedSearchFormDemo';
import BasicModalDemo               from './antd-demos/Modal/BasicModalDemo';
import BasicModalOverlayClickDemo   from './antd-demos/Modal/BasicModalOverlayClickDemo';
import InputDemo                    from './antd-demos/Input/InputDemo';
import TextareaAutosizeDemo         from './antd-demos/Input/TextareaAutosizeDemo';
import InputNumberDemo              from './antd-demos/Input/InputNumberDemo';
import InputSearchDemo              from './antd-demos/Input/InputSearchDemo';
import InputSizesDemo               from './antd-demos/Input/InputSizesDemo';

import FiltersSortersTableDemo1     from './antd-demos/Table/FiltersSortersTableDemo1';
import TableRowSelectionPropsDemo   from './antd-demos/Table/TableRowSelectionPropsDemo';

import NotificationCloseButtonHandlerDemo from './antd-demos/Notification/NotificationCloseButtonHandlerDemo';
import NotificationWithIconDemo           from './antd-demos/Notification/NotificationWithIconDemo';

import CheckboxGroupDemo            from './antd-demos/Checkbox/CheckboxGroupDemo';
import HorizontalMenuDemo           from './antd-demos/Menu/HorizontalMenuDemo';
import SideMenuDemo                 from './antd-demos/Menu/SideMenuDemo';
import SiderMenuDemo                from './antd-demos/Menu/SiderMenuDemo';

export default (

  <Route path="/" component={App}>

    <IndexRoute component={HomePage}/>

    <Route path="users"                        component={ConnectedUsersPage}/>

    <Route path="transfer-demo"                component={TransferDemo}/>
    <Route path="tree-select-demo"             component={TreeSelectDemo}/>
    <Route path="adv-search-form"              component={AdvancedSearchFormDemo}/>
    <Route path="basic-modal"                  component={BasicModalDemo}/>
    <Route path="basic-modal-overlay"          component={BasicModalOverlayClickDemo}/>

    <Route path="input"                        component={InputDemo}/>
    <Route path="input-search"                 component={InputSearchDemo}/>
    <Route path="input-sizes"                  component={InputSizesDemo}/>
    <Route path="input-textarea-autosize"      component={TextareaAutosizeDemo}/>
    <Route path="input-number"                 component={InputNumberDemo}/>

    <Route path="notification-close-handler"   component={NotificationCloseButtonHandlerDemo}/>
    <Route path="notification-with-icon"       component={NotificationWithIconDemo}/>

    <Route path="table-filters-sorter"         component={FiltersSortersTableDemo1}/>
    <Route path="table-row-selection-props"    component={TableRowSelectionPropsDemo}/>

    <Route path="checkbox-group"               component={CheckboxGroupDemo}/>
    <Route path="horizontal-menu"              component={HorizontalMenuDemo}/>
    <Route path="side-menu"                    component={SideMenuDemo}/>
    <Route path="sider-menu"                   component={SiderMenuDemo}/>

    <Route path="*" component={NotFoundPage}/>

  </Route>

);
