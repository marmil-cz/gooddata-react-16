import * as React from 'react';
import { clearInsightViewCaches } from "@gooddata/sdk-ui-ext";

//import GDDataIntegration from './LoadWebComponents';
import GDDataIntegration from './LoadReactComponents';

export default function App() {
    const [alternate, setAlternate] = React.useState(false);

    const workspaceId = !alternate ? WORKSPACE : WORKSPACE_2;
    const visualizationId = !alternate ? VISUALIZATION : VISUALIZATION_2;
    const dashboardId = !alternate ? DASHBOARD : DASHBOARD_2;

    console.log(`Connected on : ${HOST}\n default workspace: ${WORKSPACE}`);
    clearInsightViewCaches(); // https://www.gooddata.com/docs/gooddata-ui/latest/learn/visualize_data/insightview/#InsightView-Caching

    return <div>
        <h1>GoodData Data Integration Example</h1>
        <button onClick={() => setAlternate(!alternate)}>Toggle Workspace</button>
        
        {/* // React components load */
        <GDDataIntegration 
            workspace={workspaceId} 
            dashboard={dashboardId} 
            visual={visualizationId} 
        />
        /* */}

        
        {/* // Web components load
        <GDDataIntegration />
        <gd-insight
            style={{width: '100%', height: 400}}
            insight={visualizationId}
            workspace={workspaceId}
        ></gd-insight>
        <gd-dashboard
            style={{width: '100%', height: 800}}
            dashboard={dashboardId}
            workspace={workspaceId}
        ></gd-dashboard> */}
    </div>;
}
