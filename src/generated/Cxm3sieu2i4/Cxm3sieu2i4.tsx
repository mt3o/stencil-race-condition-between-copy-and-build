
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-xm3sieu2i4',
  shadow: true,
})
export class Cxm3sieu2i4 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  