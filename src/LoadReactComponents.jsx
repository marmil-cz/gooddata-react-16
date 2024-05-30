import * as React from 'react';
import './styles.css';

import { InsightView } from "@gooddata/sdk-ui-ext";
//import { Dashboard } from "@gooddata/sdk-ui-dashboard";
import { BackendProvider, WorkspaceProvider } from '@gooddata/sdk-ui';
import tigerFactory, { ContextDeferredAuthProvider, redirectToTigerAuthentication } from "@gooddata/sdk-backend-tiger";

export default function GDDataIntegration({ workspace, dashboard, visual}) {

    const backend = tigerFactory({ hostname: "https://"+HOST }).withAuthentication(new ContextDeferredAuthProvider(redirectToTigerAuthentication));
    console.log(`Load Workspace: ${workspace}\n Dashboard: ${dashboard}\n Visual: ${visual}`);

    return (
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspace}>
                <div style={{height: "400px", width: "600px"}}>
                    <InsightView insight={visual}/>
                </div>
                
               {/*  <p>And here goes some dashboard...</p>
                <Dashboard dashboard={idRef(dashboard)}/> */}
            </WorkspaceProvider>
        </BackendProvider>
    );
}
