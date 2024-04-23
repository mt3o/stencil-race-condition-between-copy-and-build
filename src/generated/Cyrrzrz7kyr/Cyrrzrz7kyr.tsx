
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-yrrzrz7kyr',
  shadow: true,
})
export class Cyrrzrz7kyr {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  