
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-rkzbq12k0v',
  shadow: true,
})
export class Crkzbq12k0v {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  