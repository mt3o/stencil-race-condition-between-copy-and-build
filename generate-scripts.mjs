import * as fs from "node:fs/promises";
import * as fsc from "node:fs";

const randomString = (len) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    return Array
      .apply(null, Array(len)) //make array of given length
      .map(() => Math.random()) //fill it with random numbers
      .map(randomNumber => Math.floor(randomNumber * charactersLength)) //change numbers to fit length of characters arr
      .map(charNumber => characters[charNumber]) //replace each random num with given char
      .join('');
};

const makeCode = (name)=>{
  return `
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-${name}',
  shadow: true,
})
export class C${name} {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  `
}

export const generateScripts = async (count) => {
  if(fsc.existsSync('src/generated')){
    await fs.rmdir('src/generated',{recursive:true});
  }
  await fs.mkdir('src/generated')
  new Array(count).fill(null)
    .map(async ()=>{
      const name = randomString(10)
      await fs.mkdir(`src/generated/C${name}`);
      fs.writeFile(`src/generated/C${name}/C${name}.tsx`,makeCode(name))
    })
}


await generateScripts(100);
