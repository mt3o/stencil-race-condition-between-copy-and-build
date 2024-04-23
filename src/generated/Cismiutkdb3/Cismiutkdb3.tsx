
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-ismiutkdb3',
  shadow: true,
})
export class Cismiutkdb3 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  