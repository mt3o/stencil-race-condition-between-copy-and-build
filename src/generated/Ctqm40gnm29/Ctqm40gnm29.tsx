
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-tqm40gnm29',
  shadow: true,
})
export class Ctqm40gnm29 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  