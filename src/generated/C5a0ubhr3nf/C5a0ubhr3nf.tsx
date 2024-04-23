
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-5a0ubhr3nf',
  shadow: true,
})
export class C5a0ubhr3nf {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  