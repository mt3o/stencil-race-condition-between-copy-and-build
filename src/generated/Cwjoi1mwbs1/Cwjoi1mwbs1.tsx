
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-wjoi1mwbs1',
  shadow: true,
})
export class Cwjoi1mwbs1 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  