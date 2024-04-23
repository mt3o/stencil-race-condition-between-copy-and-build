
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-vnn1j1of74',
  shadow: true,
})
export class Cvnn1j1of74 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  