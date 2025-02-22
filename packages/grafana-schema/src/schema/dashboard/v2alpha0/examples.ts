import {
  DashboardCursorSync,
  DashboardLinkType,
  DashboardV2Spec,
  VariableHide,
  VariableRefresh,
  VariableSort,
} from './dashboard.gen';

export const handyTestingSchema: DashboardV2Spec = {
  title: 'Test Dashboard',
  description: 'Test Description',
  editable: true,
  preload: true,
  schemaVersion: 40,
  tags: ['tag1', 'tag2'],
  liveNow: true,
  cursorSync: DashboardCursorSync.Crosshair,
  timeSettings: {
    autoRefresh: '5s',
    autoRefreshIntervals: ['5s', '10s', '30s'],
    fiscalYearStartMonth: 1,
    from: 'now-1h',
    hideTimepicker: false,
    nowDelay: '1m',
    quickRanges: [],
    timezone: 'UTC',
    to: 'now',
    weekStart: 'monday',
  },
  annotations: [],
  elements: {
    'test-panel-uid': {
      kind: 'Panel',
      spec: {
        data: {
          kind: 'QueryGroup',
          spec: {
            queries: [
              {
                kind: 'PanelQuery',
                spec: {
                  refId: 'A',
                  datasource: {
                    type: 'prometheus',
                    uid: 'datasource1',
                  },
                  query: {
                    kind: 'prometheus',
                    spec: {
                      expr: 'test-query',
                    },
                  },
                  hidden: false,
                },
              },
            ],
            queryOptions: {
              timeFrom: '1h',
              maxDataPoints: 100,
              timeShift: '1h',
              queryCachingTTL: 60,
              interval: '1m',
              cacheTimeout: '1m',
              hideTimeOverride: false,
            },
            transformations: [
              {
                kind: 'limit',
                spec: {
                  id: 'limit',
                  disabled: false,
                  filter: {
                    id: 'byValue',
                    options: {
                      reducer: 'sum',
                    },
                  },
                  options: {
                    limit: 10,
                  },
                },
              },
            ],
          },
        },
        description: 'Test Description',
        links: [],
        title: 'Test Panel',
        uid: 'test-panel-uid',
        vizConfig: {
          kind: 'timeseries',
          spec: {
            fieldConfig: {
              defaults: {},
              overrides: [],
            },
            options: {},
            pluginVersion: '7.0.0',
          },
        },
      },
    },
  },
  layout: {
    kind: 'GridLayout',
    spec: {
      items: [
        {
          kind: 'GridLayoutItem',
          spec: {
            element: {
              kind: 'ElementReference',
              name: 'test-panel-uid',
            },
            height: 0,
            width: 0,
            x: 0,
            y: 0,
          },
        },
      ],
    },
  },
  links: [
    {
      asDropdown: false,
      icon: '',
      includeVars: false,
      keepTime: false,
      tags: [],
      targetBlank: false,
      title: 'Test Link',
      tooltip: '',
      type: DashboardLinkType.Dashboards,
      url: 'http://test.com',
    },
  ],

  variables: [
    {
      kind: 'QueryVariable',
      spec: {
        allValue: '*',
        current: {
          text: 'text1',
          value: 'value1',
        },
        datasource: {
          type: 'prometheus',
          uid: 'datasource1',
        },
        definition: 'definition1',
        description: 'A query variable',
        hide: VariableHide.DontHide,
        includeAll: true,
        label: 'Query Variable',
        multi: true,
        name: 'queryVar',
        options: [],
        query: 'query1',
        refresh: VariableRefresh.OnDashboardLoad,
        regex: 'regex1',
        skipUrlSync: false,
        sort: VariableSort.Disabled,
      },
    },
    {
      kind: 'CustomVariable',
      spec: {
        allValue: 'All',
        current: {
          text: 'option1',
          value: 'option1',
        },
        description: 'A custom variable',
        hide: VariableHide.DontHide,
        includeAll: true,
        label: 'Custom Variable',
        multi: true,
        name: 'customVar',
        options: [
          {
            selected: true,
            text: 'option1',
            value: 'option1',
          },
          {
            selected: false,
            text: 'option2',
            value: 'option2',
          },
        ],
        query: 'option1, option2',
        skipUrlSync: false,
      },
    },
    {
      kind: 'DatasourceVariable',
      spec: {
        allValue: undefined,
        current: {
          text: 'text1',
          value: 'value1',
        },
        defaultOptionEnabled: true,
        description: 'A datasource variable',
        hide: VariableHide.DontHide,
        includeAll: false,
        label: 'Datasource Variable',
        multi: false,
        name: 'datasourceVar',
        options: [],
        pluginId: 'datasource1',
        refresh: VariableRefresh.OnDashboardLoad,
        regex: 'regex1',
        skipUrlSync: false,
      },
    },
    {
      kind: 'ConstantVariable',
      spec: {
        current: {
          text: 'value4',
          value: 'value4',
        },
        description: 'A constant variable',
        hide: VariableHide.DontHide,
        label: 'Constant Variable',
        name: 'constantVar',
        query: 'value4',
        skipUrlSync: true,
      },
    },
    {
      kind: 'IntervalVariable',
      spec: {
        auto: false,
        auto_count: 10,
        auto_min: '1m',
        current: {
          text: '1m',
          value: '1m',
        },
        description: 'An interval variable',
        hide: VariableHide.DontHide,
        label: 'Interval Variable',
        name: 'intervalVar',
        options: [
          {
            selected: true,
            text: '1m',
            value: '1m',
          },
          {
            selected: false,
            text: '5m',
            value: '5m',
          },
          {
            selected: false,
            text: '10m',
            value: '10m',
          },
        ],
        query: '1m,5m,10m',
        refresh: VariableRefresh.OnDashboardLoad,
        skipUrlSync: false,
      },
    },
    {
      kind: 'TextVariable',
      spec: {
        current: {
          text: 'value6',
          value: 'value6',
        },
        description: 'A text variable',
        hide: VariableHide.DontHide,
        label: 'Text Variable',
        name: 'textVar',
        query: 'value6',
        skipUrlSync: false,
      },
    },
    {
      kind: 'GroupByVariable',
      spec: {
        current: {
          text: 'text7',
          value: 'value7',
        },
        datasource: {
          type: 'prometheus',
          uid: 'datasource2',
        },
        description: 'A group by variable',
        hide: VariableHide.DontHide,
        includeAll: false,
        label: 'Group By Variable',
        multi: false,
        name: 'groupByVar',
        options: [
          {
            text: 'option1',
            value: 'option1',
          },
          {
            text: 'option2',
            value: 'option2',
          },
        ],
        skipUrlSync: false,
      },
    },
    {
      kind: 'AdhocVariable',
      spec: {
        baseFilters: [
          {
            condition: 'AND',
            key: 'key1',
            operator: '=',
            value: 'value1',
          },
          {
            condition: 'OR',
            key: 'key2',
            operator: '=',
            value: 'value2',
          },
        ],
        datasource: {
          type: 'prometheus',
          uid: 'datasource3',
        },
        defaultKeys: [
          {
            expandable: true,
            group: 'defaultGroup1',
            text: 'defaultKey1',
            value: 'defaultKey1',
          },
        ],
        description: 'An adhoc variable',
        filters: [
          {
            condition: 'AND',
            key: 'key3',
            operator: '=',
            value: 'value3',
          },
        ],
        hide: VariableHide.DontHide,
        label: 'Adhoc Variable',
        name: 'adhocVar',
        skipUrlSync: false,
      },
    },
  ],
};
