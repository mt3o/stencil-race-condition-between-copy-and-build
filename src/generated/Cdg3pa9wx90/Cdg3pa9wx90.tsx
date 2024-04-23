
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-dg3pa9wx90',
  shadow: true,
})
export class Cdg3pa9wx90 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  