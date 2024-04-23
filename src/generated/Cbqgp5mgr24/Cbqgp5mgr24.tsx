
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-bqgp5mgr24',
  shadow: true,
})
export class Cbqgp5mgr24 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  