
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-dg1o6hvgmh',
  shadow: true,
})
export class Cdg1o6hvgmh {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  