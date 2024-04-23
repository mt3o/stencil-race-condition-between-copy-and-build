
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-imh9k2bdv0',
  shadow: true,
})
export class Cimh9k2bdv0 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  