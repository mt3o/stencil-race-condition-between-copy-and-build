
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-q8olsms93h',
  shadow: true,
})
export class Cq8olsms93h {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  