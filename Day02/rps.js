const P1 = {X:[1,{C:6,B:0},"rock"],Y:[2,{A:6,C:0},"paper"],Z:[3,{B:6,A:0},"scissors"]}
const P2 = {X:[0,3],Y:[3,2],Z:[6,1]}
const result = [{A:2,B:3,C:1},{A:1,B:2,C:3},{A:3,B:1,C:2}]

const { INSPECT_MAX_BYTES } = require('buffer');
const {readFileSync, promises: fsPromises} = require('fs');
const bucket = [];
const bucket2= [];
function getSum(total, num) {
    return total + Math.round(num);
  }
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    arr.forEach((item)=>{
        const s = item.split(" ");
        bucket.push(P1[s[1]][0]+P1[s[1]][1][s[0]] || P1[s[1]][0]+3);
        bucket2.push(P2[s[1]][0]+result[P2[s[1]][1]-1][s[0]]);
    })
    console.log(bucket.reduce(getSum,0));
    console.log(bucket2.reduce(getSum,0));
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile('./data.txt');