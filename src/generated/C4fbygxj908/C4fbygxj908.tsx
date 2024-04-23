
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-4fbygxj908',
  shadow: true,
})
export class C4fbygxj908 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  