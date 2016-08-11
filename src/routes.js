import React                  from "react";
import { Route, IndexRoute }  from "react-router";
import App                    from "./containers/App";
import HomePage               from "./containers/HomePage";
import ConnectedUsersPage     from "./containers/UsersPage";
import NotFoundPage           from "./components/NotFoundPage";

import TransferDemo           from "./antd-demos/Transfer/TransferDemo";
import TreeSelectDemo         from "./antd-demos/TreeSelect/TreeSelectDemo";
import AdvancedSearchFormDemo from './antd-demos/Form/AdvancedSearchFormDemo';
import BasicModalDemo               from './antd-demos/Modal/BasicModalDemo';
import BasicModalOverlayClickDemo   from './antd-demos/Modal/BasicModalOverlayClickDemo';
import InputDemo                    from './antd-demos/Input/InputDemo';

export default (

  <Route path="/" component={App}>

    <IndexRoute component={HomePage}/>

    <Route path="users" component={ConnectedUsersPage}/>

    <Route path="transfer-demo"    component={TransferDemo}/>
    <Route path="tree-select-demo" component={TreeSelectDemo}/>
    <Route path="adv-search-form"  component={AdvancedSearchFormDemo}/>
    <Route path="basic-modal"      component={BasicModalDemo}/>
    <Route path="basic-modal-overlay"      component={BasicModalOverlayClickDemo}/>
    <Route path="input"                    component={InputDemo}/>

    <Route path="*" component={NotFoundPage}/>

  </Route>

);
