# ProjectManagerApi.Test.ProjectManagerNBench+GetAllUsersCounterThroughputBenchMark
_01-05-2018 06:12:15_
### System Info
```ini
NBench=NBench, Version=1.0.4.0, Culture=neutral, PublicKeyToken=null
OS=Microsoft Windows NT 6.2.9200.0
ProcessorCount=2
CLR=4.0.30319.42000,IsMono=False,MaxGcGeneration=2
```

### NBench Settings
```ini
RunMode=Throughput, TestMode=Measurement
NumberOfIterations=10, MaximumRunTime=00:00:10
Concurrent=False
Tracing=False
```

## Data
-------------------

### Totals
|          Metric |           Units |             Max |         Average |             Min |          StdDev |
|---------------- |---------------- |---------------- |---------------- |---------------- |---------------- |
|[Counter] AddCounter |      operations |          938.00 |          938.00 |          938.00 |            0.00 |

### Per-second Totals
|          Metric |       Units / s |         Max / s |     Average / s |         Min / s |      StdDev / s |
|---------------- |---------------- |---------------- |---------------- |---------------- |---------------- |
|[Counter] AddCounter |      operations |        1,167.81 |          964.99 |          701.83 |          172.06 |

### Raw Data
#### [Counter] AddCounter
|           Run # |      operations |  operations / s | ns / operations |
|---------------- |---------------- |---------------- |---------------- |
|               1 |          938.00 |        1,042.55 |     9,59,184.12 |
|               2 |          938.00 |          977.59 |    10,22,926.65 |
|               3 |          938.00 |        1,167.81 |     8,56,303.62 |
|               4 |          938.00 |        1,151.68 |     8,68,296.06 |
|               5 |          938.00 |          704.99 |    14,18,462.05 |
|               6 |          938.00 |        1,017.75 |     9,82,556.61 |
|               7 |          938.00 |        1,044.75 |     9,57,165.14 |
|               8 |          938.00 |          789.50 |    12,66,621.11 |
|               9 |          938.00 |        1,051.40 |     9,51,112.79 |
|              10 |          938.00 |          701.83 |    14,24,852.88 |


