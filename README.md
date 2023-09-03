# timecomplexity101
## Setup
```
npm install
gunzip -c inputs/haystack_1mil.txt.gz > inputs/haystack_1mil.txt
gunzip -c inputs/intersection_10000.txt.gz > inputs/intersection_10000.txt
gunzip -c inputs/sorting_10000.txt.gz > inputs/sorting_10000.txt
```

## Usage
### Search
#### Found Cases
```
node search/linear.js 123456 < inputs/haystack_1mil.txt
node search/logarithmic.js 123456 < inputs/haystack_1mil.txt
node search/constant.js 123456 < inputs/haystack_1mil.txt
```
#### Not Found Cases (Wost-case scenario)
```
node search/linear.js 987654 < inputs/haystack_1mil.txt
node search/logarithmic.js 987654 < inputs/haystack_1mil.txt
node search/constant.js 987654 < inputs/haystack_1mil.txt
```
### Intersection
```
node intersection/quadratic.js < inputs/intersection_10000.txt
node intersection/linear.js < inputs/intersection_10000.txt
```

### Sorting
```
node sorting/insertion.js < inputs/sorting_10000.txt
node sorting/linearithmic.js < inputs/sorting_10000.txt
```

Written by Marhadiasha Kusumawardhana.
