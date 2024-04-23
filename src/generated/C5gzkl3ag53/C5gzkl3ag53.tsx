
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-5gzkl3ag53',
  shadow: true,
})
export class C5gzkl3ag53 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  