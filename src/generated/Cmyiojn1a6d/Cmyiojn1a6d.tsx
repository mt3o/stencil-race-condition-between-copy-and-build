
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-myiojn1a6d',
  shadow: true,
})
export class Cmyiojn1a6d {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  