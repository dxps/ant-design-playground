import React                  from "react";
import { Route, IndexRoute }  from "react-router";
import App                    from "./containers/App";
import HomePage               from "./containers/HomePage";
import ConnectedUsersPage     from "./containers/UsersPage";
import NotFoundPage           from "./components/NotFoundPage";

import TransferDemo           from "./antd-demos/Transfer/TransferDemo";
import TreeSelectDemo         from "./antd-demos/TreeSelect/TreeSelectDemo";
import AdvancedSearchFormDemo from './antd-demos/Form/AdvancedSearchFormDemo';

export default (

  <Route path="/" component={App}>

    <IndexRoute component={HomePage}/>

    <Route path="users" component={ConnectedUsersPage}/>

    <Route path="transfer-demo" component={TransferDemo}/>
    <Route path="tree-select-demo" component={TreeSelectDemo}/>
    <Route path="adv-search-form" component={AdvancedSearchFormDemo}/>

    <Route path="*" component={NotFoundPage}/>

  </Route>

);
